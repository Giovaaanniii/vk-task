import './styles/CreateForm .css'
function CreateForm() {
  return (
    <div className="formWrapper">
       <form action="" className="formTable">
        <h1>Добавить запись</h1>
        <div className='record'>
          <label>Имя</label>
         <input type="text" id="name" />
        </div>
        <div className='record'>
          <label>Имя</label>
          <input type="text" id="name" />
        </div>
        <div className='record'>
          <label>Имя</label>
         <input type="text" id="name" />
        </div>
        <div className='record'>
          <label>Имя</label>
          <input type="text" id="name" />
        </div>
        <div className='record'>
          <label>Имя</label>
          <input type="text" id="name" />
        </div>
      </form>
     </div>
  );
}

export default CreateForm;
