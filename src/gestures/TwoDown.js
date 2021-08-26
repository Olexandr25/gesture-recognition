import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe 2 finger down gesture 
const TwoDown = new GestureDescription('two_down');


// thumb full curl:
TwoDown.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
TwoDown.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);


// index no curl:
TwoDown.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TwoDown.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
TwoDown.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
TwoDown.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// middle no curl:
TwoDown.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TwoDown.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
TwoDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
TwoDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);

// ring and pinky full curl:
TwoDown.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TwoDown.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default TwoDown;
