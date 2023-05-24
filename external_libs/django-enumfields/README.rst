.. image:: https://travis-ci.org/qcoumes/django-enumfields.svg?branch=master
    :target: https://travis-ci.org/qcoumes/django-enumfields
.. image:: https://codecov.io/gh/qcoumes/django-enumfields/branch/master/graph/badge.svg
    :target: https://codecov.io/gh/qcoumes/enumfields
.. image:: https://img.shields.io/badge/python-3.4+-brightgreen.svg
    :target: #
.. image:: https://img.shields.io/badge/django-1.8%2C%201.10%2C%201.11%2C%202.0+-brightgreen.svg
    :target: #
.. image:: https://img.shields.io/badge/license-MIT-brightgreen.svg
    :target: https://github.com/qcoumes/django-enumfields/blob/master/LICENSE

This package lets you use real Python (PEP435_-style) enums with Django.

Installation
------------

From source code:

    python setup.py install

From pip:

    pip install -e git://github.com/qcoumes/django-enumfields#egg=django-enumfields


Included Tools
--------------


EnumField, EnumIntegerField
```````````````````````````

.. code-block:: python

    from enumfields import EnumField
    from enumfields import Enum  # Uses Ethan Furman's "enum34" backport

    class Color(Enum):
        RED = 'r'
        GREEN = 'g'
        BLUE = 'b'

    class MyModel(models.Model):

        color = EnumField(Color, max_length=1)

Elsewhere:

.. code-block:: python

    m = MyModel.objects.filter(color=Color.RED)

``EnumIntegerField`` works identically, but the underlying storage mechanism is
an ``IntegerField`` instead of a ``CharField``.


Usage in Forms
~~~~~~~~~~~~~~

Call the ``formfield`` method to use an ``EnumField`` directly in a ``Form``.

.. code-block:: python

    class MyForm(forms.Form):

        color = EnumField(Color, max_length=1).formfield()

Enum
````

Normally, you just use normal PEP435_-style enums, however, django-enumfields
also encludes its own version of Enum with a few extra bells and whistles.
Namely, the smart definition of labels which are used, for example, in admin
dropdowns. By default, it will create labels by title-casing your constant
names. You can provide custom labels with a nested "Label" class.

.. code-block:: python

    from enumfields import EnumField, Enum  # Our own Enum class

    class Color(Enum):
        RED = 'r'
        GREEN = 'g'
        BLUE = 'b'

        class Label:
            RED = 'A custom label'

    class MyModel(models.Model):
        color = EnumField(Color, max_length=1)

    assert Color.GREEN.label == 'Green'
    assert Color.RED.label == 'A custom label'


.. _PEP435: http://www.python.org/dev/peps/pep-0435/

Besides the special Label class, for any other nested class declared inside the Enum, a corresponding attribute will be added to the class instance without providing any default.

.. code-block:: python

    from enumfields import EnumField, Enum  # Our own Enum class

    class Color(Enum):
        RED = 'r'
        GREEN = 'g'
        BLUE = 'b'

        class AnyClass:
            GREEN = "My value"

    assert Color.GREEN.anyclass == "My value"
    # Would raise Attribute error:
    Color.RED.anyclass


EnumFieldListFilter
```````````````````

``enumfields.admin.EnumFieldListFilter`` is provided to allow using enums in
``list_filter``.


.. code-block:: python

    from enumfields.admin import EnumFieldListFilter

    class MyModelAdmin(admin.ModelAdmin):
      list_filter = [('color', EnumFieldListFilter)]

*Originally forked from https://github.com/hzdg/django-enumfields (which, as of July 2018, still support python 2)*
