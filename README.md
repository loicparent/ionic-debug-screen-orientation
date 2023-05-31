# Process
1. Go to `src/app/app.component.ts`
2. See the configuration especially at the lines 25 and 28.
3. Run on a device with Android.

- ✅ If the `setOverlaysWebView` is active and without `setBackgroundColor`, the result is correct and the statusbar is transparent with the text in white (as expected)
- ✅ If the `setOverlaysWebView` is deactivate and the `setBackgroundColor` is defined, the render is ok with the statusbar up to the content (as expected)
- ❌ If the `setOverlaysWebView` is active and with `setBackgroundColor` defined with a color with transparency, the result is correct at the first opening of the app but it is not after another reload. The statusbar will be up to the content rather than superimposed.

So, if I set a statusbar with overlay and with opacity (ex: 50%), the result is not as expected.
