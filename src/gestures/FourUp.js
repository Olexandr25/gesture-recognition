import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe index + middle up gesture 
const FourUpDescription = new GestureDescription('four_up');

// Thumb:
// - curled
// - vertical up
FourUpDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
FourUpDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
FourUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.3);

// All other fingers:
// - no curled
// - vertical up
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    FourUpDescription.addCurl(finger, FingerCurl.NoCurl, 1.0);
    FourUpDescription.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    FourUpDescription.addDirection(finger, FingerDirection.DiagonalUpRight, 0.3);
    FourUpDescription.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.3);
}

export default FourUpDescription;