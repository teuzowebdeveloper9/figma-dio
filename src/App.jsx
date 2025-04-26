import './App.css'
import logoDio from './img/logo-dio 1.png'
import user from './img/vector.png'
import email from './img/email.png'
import password from './img/password.png'

function App() {
  

  return (
    <>
      <header>
        <img src={logoDio} alt="logo-dio " />
        <div className='header-info' >
          <p className='home'>HOME</p>
          <p className='entrar'>entrar</p>
          <p className='cadastrar'>cadastrar</p>

        </div>
      </header>
      <main>
        <div className='primeira-metade'>
          <p>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</p>
        </div>
        <div className='segunda-metade'>
          <h3>comece agora gratis </h3>
          <p>crie sua conta e make the change</p>
          <div className='form-container'>
            <form className="form">
              <div className="input-group">
                <img src={user} alt="user-dio" className='icon-user' />
                <input type="text" placeholder='nome completo '/>
              </div>
              <div className="input-group">
                <img src={email} alt="email-dio" className='icon-email' />
                <input type="text" placeholder='email'/>
              </div>
              <div className="input-group">
                <img src={password} alt="password-dio" className='icon-password' />
                <input type="text" placeholder='password'/>
              </div>
              <button type='submit' className='button-submite'>Criar minha conta</button>
            </form>
          </div>
          
        </div>
      </main>
       
    </>
  )
}

export default App
