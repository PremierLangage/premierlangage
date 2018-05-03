#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  views.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from user_profile.forms import ProfileForm
from user_profile.enums import EditorTheme, ColorBlindness


sample_C = """
/* add.c
 * a simple C program
 */
  
#include <stdio.h>
#define LAST 10
  
int main()
{
    int i, sum = 0;
   
    for ( i = 1; i <= LAST; i++ ) {
      sum += i;
    } /*-for-*/
    printf("sum = %d\n", sum);

    return 0;
}
"""

sample_python = """
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import math

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def move(p step, angle=0):
    p.x = p.x + step * math.cos(angle)
    p.y = p.y - step * math.sin(angle)
    return nx, ny

print("Test")
print(move(Point(0, 0), 10))
"""



@login_required
def edit_profile(request):
    
    if request.method == 'POST':
        color_blindness = request.POST.get("color_blindness", None)
        editor_theme = request.POST.get("editor_theme", None)
    
        if color_blindness != None: # Can be 0
            request.user.profile.color_blindness = color_blindness
        if editor_theme != None: # Can be 0
            request.user.profile.editor_theme = editor_theme
        request.user.save()
        messages.info(request, "Paramètres sauvergardés.")
    
    form = ProfileForm(initial={
        "color_blindness": request.user.profile.color_blindness,
        "editor_theme": request.user.profile.editor_theme,
        "student_id": request.user.profile.student_id,
        "consumer_id": request.user.profile.consumer_id,
        "role": request.user.profile.role,
        "mail": request.user.email,
    })
        
    
    return render(request, "user_profile/edit_profile.html", {"form": form})


@login_required
def editor_preview(request):
    return render(request, "user_profile/editor_preview.html", {
        "themes": [i for i in EditorTheme],
        "sample_c": sample_C,
        "sample_python": sample_python,
    }) 
