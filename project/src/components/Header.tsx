import '../styles/header.scss'

interface IDarkMode {
  ativo: boolean;
  setAtivo: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header(props: IDarkMode) {

  const {ativo, setAtivo} = props

  return (
    <header className="header">
      <div className="containerHeader">
        <div>
          <img src="/logo.svg" alt="to.do"/>
        </div>
        <label className="switch">
          <span className="textSwitch">
            {!ativo ? "Ativar Dark Mode" : "Deativar Dark Mode"}
          </span>
          <div className="switchWrapper">
            <input className="checkBox" type="checkbox" onChange={() => setAtivo(!ativo)}/>
            <span className={!ativo? "switchButton light" : "switchButton dark"}></span>
          </div>
        </label>
      </div>


    </header>
  )
}