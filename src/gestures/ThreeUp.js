import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe index + middle + ring -> up
const ThreeUpDescription = new GestureDescription('three_up');

for(let fingers of [Finger.Index, Finger.Middle, Finger.Ring]){
    ThreeUpDescription.addCurl(fingers, FingerCurl.NoCurl, 1.0);
    ThreeUpDescription.addDirection(fingers, FingerDirection.VerticalUp, 1.0);
    ThreeUpDescription.addDirection(fingers, FingerDirection.DiagonalUpRight, 0.5);
    ThreeUpDescription.addDirection(fingers, FingerDirection.DiagonalUpLeft, 0.5);
}

// all other fingers:
// - curled
ThreeUpDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
ThreeUpDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
ThreeUpDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
ThreeUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

ThreeUpDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ThreeUpDescription.addDirection(FingerDirection.Pinky, FingerDirection.VerticalDown, 0.8);
ThreeUpDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);
ThreeUpDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.5);

export default ThreeUpDescription;