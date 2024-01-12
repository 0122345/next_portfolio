 

const list = () => {
  return (
    <div className="">
        <form className="form">

	    <label class="label">
        <input checked="" value="home" name="band" type="radio" class="input" />
        <span class="span">Home</span></label>
	     <label class="label">
        <input value="fm" name="band" type="radio" class="input"/><span class="span">
        ABout Me</span></label>
	    <label class="label">
        <input value="sw" name="band" type="radio" class="input"/><span class="span">
        Work</span></label>
	    <label class="label">
        <input value="mw" name="band" type="radio" class="input"/><span class="span">
        Blog</span></label>
	     <label class="label">
        <input value="mw" name="band" type="radio" class="input"/><span class="span">
        Contact Me</span></label>
       </form>
    </div>
  );
}

export default list