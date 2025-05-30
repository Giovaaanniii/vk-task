import "./styles/CreateForm .css";
import { useForm } from "react-hook-form";
interface FormData {
  names: string;
  surname:string;
  email: string;
  telephone: number
  age: number;
}
function CreateForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode:"onBlur"
  });

  const onSubmit = (data: any)=>{
    alert(JSON.stringify(data))
    reset()
  }
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="formTable">
        <h1>Добавить запись</h1>

        <div className="record">
          <label>Имя</label>
          <input 
          {...register('names', {
            required:"Введите свое имя"
          })}
           type="text" id="name" />
           <div>
           {errors.names && <p className="error">{errors.names.message}</p>}
           </div>
        </div>

        <div className="record">
          <label>Фамилия</label>
          <input 
          {...register('surname', {
            required:"Введите свою фамилию"
          })}
           type="text" id="surnames" />
           <div>
           {errors.surname && <p className="error">{errors.surname.message}</p>}
           </div>
        </div>
        
         <div className="record">
          <label>Возраст</label>
          <input 
          {...register('age', {
            required:"Введите свой возраст"
          })}
           type="text" id="age" />
           <div>
           {errors.age && <p className="error">{errors.age.message}</p>}
           </div>
        </div>
                
         <div className="record">
          <label>Почта</label>
          <input 
          {...register('email', {
            required:"Введите свою почту"
          })}
           type="text" id="email" />
           <div>
           {errors.email && <p className="error">{errors.email.message}</p>}
           </div>
        </div>
                
         <div className="record">
          <label>Телефон</label>
          <input 
          {...register('telephone', {
            required:"Введите свой номер телефона",
            minLength:{
              value:11,
              message:"Неправильно введен номер телефона"
            }
          })}
           type="text" id="telephone" />
           <div>
           {errors.telephone && <p className="error">{errors.telephone.message}</p>}
           </div>
        </div>

      

        <div className="record">
          <input type="submit" disabled={!isValid}/>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
