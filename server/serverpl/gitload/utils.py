# -*- coding: utf-8 -*-

def create_breadcrumb(path):
    if (path[-1] != '/'):
        path += '/'
    breadcrumb = path.split('/')[:-1];
    breadcrumb_value = list()
    for i in range(0, len(breadcrumb)):
        if (i == 0):
            breadcrumb_value.append("/")
        else:
            breadcrumb_value.append("")
        for j in range(1, i+1):
            breadcrumb_value[i] += ('/' + breadcrumb[j])
            if (breadcrumb_value[i][0] == '/' and len(breadcrumb_value[i]) > 1):
                breadcrumb_value[i] = breadcrumb_value[i][1:]
    
    return breadcrumb, breadcrumb_value
