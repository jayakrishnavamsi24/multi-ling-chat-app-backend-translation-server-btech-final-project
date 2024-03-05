import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId} = eachApp

  return appId === -1 ? (
    <a
      className="app-item multi-ling-item"
      href="https://storage.googleapis.com/multi_ling_chat/Multi%20Ling%20Chat.apk"
    >
      <li className="app-img-container">
        <img src={eachApp.imageUrl} alt={eachApp.appName} />
      </li>
      <p className="multi-ling-item">{eachApp.appName}</p>
    </a>
  ) : (
    <li className="app-item">
      <li className="app-img-container">
        <img src={eachApp.imageUrl} alt={eachApp.appName} />
      </li>
      <p>{eachApp.appName}</p>
    </li>
  )
}

export default AppItem
