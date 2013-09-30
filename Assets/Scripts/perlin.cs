using UnityEngine;
using System.Collections;

public class perlin : MonoBehaviour {
	private Quaternion rot;
	public GameObject terraincube;

	// Use this for initialization
	void Start () {
		rot.eulerAngles = new Vector3(0, 0, 0);
		for(float fx = 0; fx < 2; fx++) {
			for(float fy = 0; fx < 2; fy++) {
				float Perlin1 = Mathf.PerlinNoise(fx/30, 76);
				float Perlin2 = Mathf.PerlinNoise(fy/30, 22);
				Instantiate(terraincube, new Vector3(fy-50, Perlin1*40*Perlin2, fx-50), rot);

			}
		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}   