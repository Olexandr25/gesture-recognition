import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe love you gesture 🤟
const loveYouDescription = new GestureDescription('love_you');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
loveYouDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveYouDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
loveYouDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
loveYouDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);

// Index:
// - not curled
// - vertical up (best) or diagonal up left / right
loveYouDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
loveYouDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
loveYouDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
loveYouDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// Pinky:
// - not curled
// - vertical up (best) or diagonal up left / right
loveYouDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
loveYouDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.5);
loveYouDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.5);
loveYouDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.5);

// all other fingers:
// - curled
// - VerticalUp
for(let finger of [Finger.Middle, Finger.Ring,]) {
  loveYouDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  loveYouDescription.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  loveYouDescription.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}
export default loveYouDescription;
