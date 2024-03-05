import './index.css'

const TabItem = props => {
  const {eachTab, activeTabId, changeTab} = props
  const tabBtnStyles =
    eachTab.tabId === activeTabId ? 'selected-tab-styles' : 'normal-tab-styles'
  const tabStyles =
    eachTab.tabId === activeTabId ? 'selected-tab-item' : 'normal-tab-item'

  const onClickTab = () => {
    changeTab(eachTab.tabId)
  }

  return (
    <li className={tabStyles}>
      <button type="button" className={tabBtnStyles} onClick={onClickTab}>
        {eachTab.displayText}
      </button>
    </li>
  )
}

export default TabItem
