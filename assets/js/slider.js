/*
 
    Awkward Showcase - jQuery plugin 
    http://www.jquery.com
    http://www.awkwardgroup.com/sandbox/awkward-showcase-a-jquery-plugin
    http://demo.awkwardgroup.com/showcase
    Version: 1.1.3

    Copyright (C) 2011 Awkward Group (http://www.awkwardgroup.com)
    Licensed under Attribution-ShareAlike 3.0 Unported
    http://creativecommons.org/licenses/by-sa/3.0/
*/
$(document).ready(function()
{
  $("#showcase").awShowcase(
  {
    content_height:     470,
    fit_to_parent:      true,
    auto:         false,
    interval:       3000,
    continuous:       false,
    loading:        true,
    tooltip_width:      200,
    tooltip_icon_width:   32,
    tooltip_icon_height:  32,
    tooltip_offsetx:    18,
    tooltip_offsety:    0,
    arrows:         true,
    buttons:        false,
    btn_numbers:      true,
    keybord_keys:     true,
    mousetrace:       false, /* Trace x and y coordinates for the mouse */
    pauseonover:      true,
    stoponclick:      true,
    transition:       'hslide', /* hslide/vslide/fade */
    transition_speed:   500,
    transition_delay:   300,
    show_caption:     'onhover', /* onload/onhover/show */
    thumbnails:       true,
    thumbnails_position:  'outside-last', /* outside-last/outside-first/inside-last/inside-first */
    thumbnails_direction: 'horizontal', /* vertical/horizontal */
    thumbnails_slidex:    0, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
    dynamic_height:     false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
    speed_change:     false, /* Set to true to prevent users from swithing more then one slide at once. */
    viewline:       true /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. It's OK with only the width. */

  });
});