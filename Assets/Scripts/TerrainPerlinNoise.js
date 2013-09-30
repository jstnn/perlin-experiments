#pragma strict

var speed : float = 10;
var size:int = 32;

function Start () 
{
    TerrainGenerator();

}

function Update () {
    var cubes : GameObject[];
    cubes = GameObject.FindGameObjectsWithTag ("terrain");
    for (var terrain : GameObject in cubes)  { 
        terrain.transform.Translate(0, Time.deltaTime*speed, 0);
        if (terrain.transform.position.y > size) {
            //TerrainGenerator();
            terrain.transform.position = Vector3(terrain.transform.position.x, terrain.transform.position.y-size, terrain.transform.position.z);
        }
    }
}

function TerrainGenerator () 
{
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
                Instantiate (Resources.Load("Prefabs/lava", GameObject), Vector3(x, y, 2), Quaternion.identity);
                
                map+="."; // empty/walkable
            }else{

                Instantiate (Resources.Load("Prefabs/planet", GameObject), Vector3(x, y, Random.value), Quaternion.identity);
                //var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
                //cube.transform.position = Vector3(x, y, 0);
                map+="#"; // rockwall
            }
        }
        map+="\n"; // add new line
    }
    print (map);
}
