let count = 0;

class cam
{
	constructor()
  {
  	this._obj = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
  }
}

class rend
{
	constructor()
  {
  	this._renderer = new THREE.WebGLRenderer({antialias:true});
    this._renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this._renderer.domElement);
  }
}

class grp
{
	constructor()
  {
  	this._obj = new THREE.Group();
  }
  add(ob)
  {
  	this._obj.add(ob);
  }
}

class scn
{
	constructor(col = new THREE.Color( 0x888888 ))
  {
  	if(!scn._instance)
    {
  		this._obj = new THREE.Scene();
      this._obj.background=col;
      scn._instance = this;
    }
    return scn._instance;
  }
  add(ob)
  {
  	this._obj.add(ob);
  }
}

class scnSystem
{
	constructor(){this._scnEntitys={};}
	execute()