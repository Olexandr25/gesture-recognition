import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const TwoUpDescription = new GestureDescription('two_up');


// thumb:
TwoUpDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
TwoUpDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
TwoUpDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
TwoUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
TwoUpDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TwoUpDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
TwoUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
TwoUpDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TwoUpDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
TwoUpDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
TwoUpDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TwoUpDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
TwoUpDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
TwoUpDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
TwoUpDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TwoUpDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
TwoUpDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
TwoUpDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
TwoUpDescription.setWeight(Finger.Index, 2);
TwoUpDescription.setWeight(Finger.Middle, 2);

export default TwoUpDescription;
