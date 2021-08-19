import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture ✊
const FistDescription = new GestureDescription('fist');

// all fingers:
// - curled
// - vertical up
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky,Finger.Thumb]) {
  FistDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  FistDescription.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default FistDescription;
