var fileInput = File ("/d/test_jpg/icon.png");
var fileOutput = File ("/d/test_jpg/icon.txt");
fileInput.open ("r"); fileInput.encoding = "binary";
var temp = fileInput.read(); fileInput.close();
fileOutput.open ("w");
fileOutput.write (temp.toSource ());
fileOutput.close ();