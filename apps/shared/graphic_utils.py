"""
This file gather some graphical utilities that could be used inside
other apps of the projet PLaTon.

N. Borie(poor graphical programmer) : original version 10. jan 2021.
Feel free to modify, throw away or use better technology.

TESTS:

>>> all([graph_percent(i) for i in range(101)])
True
"""

def color_percent(p):
    """Return the adapted color for `p` percent achievement.  `0`
    percent will be dark red, `100` percent will be dark gren. A
    linear interpolation is returned beetween these extrema but a
    coefficient increases the luminosity around the midle `50`.

    TESTS:

    >>> color_percent(0)
    (180, 0, 0)
    >>> color_percent(50)
    (180, 180, 0)
    >>> color_percent(83)
    (41, 200, 0)
    >>> color_percent(100)
    (0, 180, 0)
    """
    coef = 2.0 - (max([p-50, 50-p]) / 50.0)
    #coef = 1
    r = coef*180*(1 - (p/100.0))
    g = coef*180*(p/100.0)
    b = 0
    return (int(r), int(g), int(b))

def graph_percent(p):
    """Return a python string which is an SVG code drawing a angular
    portion of circle around a text showing the percent `p`. The color
    of circles part use function `color_percent`.

    TESTS:

    >>> len(graph_percent(53)) > 0
    True
    """
    p = int(p)
    r,g,b = color_percent(p)
    ans='<svg height="80" width="80">'
    ans+='<polygon points="0,0 80,0 80,80 0,80" style="fill:rgb(255,255,255)" />'
    ans+='<circle cx="40" cy="40" r="40" fill="rgb({},{},{})" />'.format(r, g, b)
    ans+='<circle cx="40" cy="40" r="30" fill="rgb(255,255,255)" />'
    # all the following to hide the proper sector part of the circle
    if p <= 25:
        ans+='<polygon points="0,0 0,80 40,80 40,0" style="fill:rgb(255,255,255)" />'
        ans+='<polygon points="40,40 40,80 80,80 80,40" style="fill:rgb(255,255,255)" />'
        if p < 13:
            ab = max([int(80 - 40*((12.5 - p)/12.5)), 44])
            ans+='<polygon points="{},0 40,40 80,40 80,0" style="fill:rgb(255,255,255)" />'.format(ab)
        else:
            od = 40*((p-12.5)/12.5)
            ans+='<polygon points="80,{} 40,40 80,40" style="fill:rgb(255,255,255)" />'.format(od)
    elif p <= 50:
        ans+='<polygon points="0,0 0,80 40,80 40,0" style="fill:rgb(255,255,255)" />'
        if p < 38:
            od = 80-40*((37.5-p)/12.5) 
            ans+='<polygon points="40,40 40,80 80,80 80, {}" style="fill:rgb(255,255,255)" />'.format(od)
        else:
            ab = 40+40*((50-p)/12.5)
            ans+='<polygon points="40,40 40,80 {},80" style="fill:rgb(255,255,255)" />'.format(ab)
    elif p <= 75:
        ans+='<polygon points="0,0 0,40 40,40 40,0" style="fill:rgb(255,255,255)" />'
        if p < 63:
            ab = 40*((62.5-p)/12.5)
            ans+='<polygon points="40,40 0,40 0,80 {},80" style="fill:rgb(255,255,255)" />'.format(ab)
        else:
            od = 40+40*((75-p)/12.5)
            ans+='<polygon points="40,40 0,40 0,{}" style="fill:rgb(255,255,255)" />'.format(od)
    else:
        if p < 88:
            od = 40*((87.5-p)/12.5)
            ans+='<polygon points="0,0 0,{} 40,40 40,0" style="fill:rgb(255,255,255)" />'.format(od)
        else:
            ab = 40 - 40*((100-p)/12.5)
            ans+='<polygon points="{},0 40,40 40,0" style="fill:rgb(255,255,255)" />'.format(ab)
    # To center the text (nice display on firefox, bad centered on chrome-like)
    if p <= 9:
        ans+='<text x="24" y="46" font-size="20" fill="black">{}%</text>'.format(p)
    elif p <= 99:
        ans+='<text x="19" y="46" font-size="20" fill="black">{}%</text>'.format(p)
    else:
        ans+='<text x="12" y="46" font-size="20" fill="black">100%</text>'
    ans+='</svg>'
    return ans
