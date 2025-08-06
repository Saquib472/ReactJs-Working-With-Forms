export default function Select({id,label,name,value,onchange,hiddenOption,options,error}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onchange}
        >
          {
            hiddenOption && <option value="" hidden>{hiddenOption}</option>
          }
          {
            options.map((op)=>(<option key={op} value={op}>{op}</option>))
          }
        </select>
        <p className="error">{error}</p>
    </div>
  )
}
