#! /usr/bin/env python3
"""
Keep files in memory without using the filesystem
"""

import io, logging

logger = logging.getLogger(__name__)

class VirtualFile(object):
	def __init__(self, content, read_only=True):
		self.content = content
		self.read_only = read_only
	def get_wrapper(self, binary=True, encoding="UTF-8", read_only=True):
		return IOWrapper(self, binary=binary, encoding=encoding, read_only=read_only or self.read_only)
	@classmethod
	def create(cls, data, freeze=True):
		return cls(data, read_only=freeze)
		
class IOWrapper(object):
	def __init__(self, vfile: VirtualFile, binary=True, encoding="UTF-8", read_only=True):
		self.vfile = vfile
		self.data = vfile.content
		if isinstance(self.data, str) and binary:
			self.data = self.data.encode(encoding)
		elif isinstance(self.data, bytes) and not binary:
			self.data = self.data.decode(encoding)
		self.read_only = read_only
		self.file = (io.BytesIO if binary else io.StringIO)(self.data)
	def __enter__(self):
		return self
	def __exit__(self, *kargs, **kwargs):
		self.close()
	def close(self):
		self.vfile.content = self.file.getvalue()
	def write(self, data):
		if self.read_only:
			raise IOError("Write cannot be used in read-only mode")
		return self.file.write(data)
	def __getattr__(self, key, default=None):
		return getattr(self.file, key, default)

class VirtualFileManager(object):
	def __init__(self, individual_max_size=100000, global_max_size=1000000):
		self.individual_max_size = individual_max_size # individual maximal size of a file
		self.global_max_size = global_max_size
		self.files = {}
		self.size = 0
		self.parent = None
	def supply(self, name, data):
		self.files[name] = VirtualFile.create(data)
	def open(self, filepath, mode, *kargs, **kwargs):
		logger.info("Open file {} with mode {} in {}".format(filepath, mode, self))
		"""Open the file"""
		binary = "b" in mode
		vfile = self.files.get(filepath, None)
		append = False
		if "w" in mode or "a" in mode:
			ro = False
			if vfile and vfile.read_only:
				raise IOError("Cannot overwrite the read-only file {}".format(filepath))
			elif vfile and "a" in mode:
				append = True
			else:
				vfile = VirtualFile.create(b"" if binary else "", freeze=False)
				self.files[filepath] = vfile
		else:
			ro = "+" not in mode
			vfile = self.files.get(filepath, None)
			if vfile and (vfile.read_only and not ro):
				raise IOError("Cannot modify a read-only file")
			elif not vfile and ro:
				# try to find in the parent
				if self.parent:
					return self.parent.open(filepath, mode, *kargs, **kwargs)
				else:
					raise IOError("Cannot open an unexisting file")
			elif not vfile:
				vfile = VirtualFile.create(b"" if binary else "", freeze=False)
		f = vfile.get_wrapper(binary=binary, encoding=kwargs.get("encoding", "UTF-8"), read_only=ro)
		if append:
			f.seek(0,2)
		return f
