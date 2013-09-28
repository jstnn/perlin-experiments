#pragma strict
function Start () 
{
    var size:int = 32;
    var noiseScale:float = 0.3;
    var caveThreshold=0.5;
    var map="";

    for (var y:int=0;y<size;y++)
    {
        for (var x:int=0;x<size;x++)
        {
            var noise:float = Mathf.PerlinNoise(x*noiseScale,y*noiseScale);
            //print ("xy:"+x+","+y+" noise:"+noise); // for checking what values you are getting
            
            if (noise<caveThreshold)
            {
                map+="."; // empty/walkable
            }else{
                var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
                cube.transform.position = Vector3(x, y, 0);
                map+="#"; // rockwall
            }
        }
        map+="\n"; // add new line
    }
    print (map);
}
