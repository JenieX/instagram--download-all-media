# Instagram - Download All Media
User Script that allows you to download all user media.

---

## Browser Download Settings (screenshot)
- Disable `Ask me what to do with each download`, to save media without showing any dialog.
- Set the `Location` folder to some folder like `D:\instagram-downloads`

---

## Notes
- [This is an experimental user script](#experimental)
- [Only One download session is allowed](#one-download-session)
- [Download session will start in a new popup window](#download-session-popup)
- [Download window should not be minimized](#no-minimized-download-window)
- [Three seconds delay between each download](#download-delay)

## Why?

### Experimental
Instagram tends to make changes frequently, meaning this user script could break any time. And I'm yet to test it thoroughly.

### One Download Session
In order to lower the chance of being detected as a spam.

### Download Session Popup
It is related to how Instagram works, otherwise, you will have to keep the tab focused. And in order for the download window to show up, you may need to allow it, as it is a `POPUP`.

### No Minimized Download window 
It is related to how Instagram works. And if the window is minimized, the download session will be paused. It will automatically resume download after maximizing the window though.

### Download Delay
To simulate normal usage thus lower the chance of being detected as a spam.

---

## Naming Template
* `%mediaName%` : the media name. Extracted from the media URL.
* `%mediaIndex%` : the media postion in a post. The start is zero, so, first media is 0, second is 1, etc.
* `%postID%` : the id of the post. It is the last segment in the URL of a post.
* `%userName%` : the user id that shows up in the URL of a user page.
* `%date%` : the date in which the media was posted. It is in this form "twoDigitsYear-twoDigitsMonth-twoDigitsDay".
* `%timestamp%` : the timestamp in which the media was posted.

Examples
* `%postID%-%mediaIndex%-%userName%`
* `%timestamp%_%userName%_%mediaIndex%
---
