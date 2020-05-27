import xbmcaddon
import xbmcgui

addon       = xbmcaddon.Addon()
addonname   = addon.getAddonInfo('name')

line1 = "Hello World! We can write anything we want here Using Python"

#  import ipdb; ipdb.set_trace()
#  from IPython import embed; embed(colors="neutral")

# Launch a dialog box in kodi showing the string variable 'line1' as the contents
xbmcgui.Dialog().ok(addonname, line1)
