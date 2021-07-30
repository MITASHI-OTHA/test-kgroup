import * as React from "react"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Divider , Avatar, Badge   } from 'antd';
import { Icon, InlineIcon } from '@iconify/react';
import baselineTune from '@iconify-icons/ic/baseline-tune';
import logo from './images/logo.png'
import tinylogo from './images/logoTiny.png'
import { HashRouter as Router, Route, Switch, Link, withRouter, useHistory } from 'react-router-dom';
import outlineDashboard from '@iconify-icons/ic/outline-dashboard';
import baselineCalendarToday from '@iconify-icons/ic/baseline-calendar-today';
import baselineBarChart from '@iconify-icons/ic/baseline-bar-chart';
import baselineGroups from '@iconify-icons/ic/baseline-groups';
import baselinePersonOutline from '@iconify-icons/ic/baseline-person-outline';
import bxCube from '@iconify-icons/bx/bx-cube';
import stackIcon from '@iconify-icons/bi/stack';
import stackedScrolling1 from '@iconify-icons/carbon/stacked-scrolling-1';
import outlineInsertDriveFile from '@iconify-icons/ic/outline-insert-drive-file';
import timerSand from '@iconify-icons/mdi/timer-sand';
import outlineTextSnippet from '@iconify-icons/ic/outline-text-snippet';
import invoiceIcon from '@iconify-icons/uil/invoice';
import currencyEuro from '@iconify-icons/tabler/currency-euro';
import userSettingsLine from '@iconify-icons/ri/user-settings-line';
import envelopeIcon from '@iconify-icons/fa-solid/envelope';
import chatLeftDots from '@iconify-icons/bi/chat-left-dots';
import baselineLaunch from '@iconify-icons/ic/baseline-launch';
import cameraVideo from '@iconify-icons/bi/camera-video';
import fileIcon from '@iconify-icons/gg/file';
import fieldTimeOutlined from '@iconify-icons/ant-design/field-time-outlined';
import calculatorIcon from '@iconify-icons/bi/calculator';
import questionMarkCircleOutline from '@iconify-icons/eva/question-mark-circle-outline';
import gearFill from '@iconify-icons/bi/gear-fill';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "./css/bootstrap-grid.css";
import "./css/style.css";
const App = () => {
  const [actives, setActive] = React.useState('sub1');
  const [toggleActive, setToggleItem] = React.useState([]);
  const [collapsed, setCollapsed] = React.useState(false)
  const { SubMenu, Item } = Menu;
  const Itemlogo = ()=>(
           !collapsed?(<div  className="p-3 text-center image-fluid " style={{height: "auto"}}>
                <img src={logo} className="w-140"/>
            </div>):(<div className="p-2"> <img src={tinylogo} style={{width: "25px"}}/>  </div>)
  )
  const handleActive = (key)=> {
    console.log('key-- ', key)
    if(key == 'sub4' || key == 'sub1') {
      setToggleItem([])
    }
    setActive(key)
  }

  const handleToggleMenu = (key)=>{
    //Verifier si la key est deja dans le arr
    if(toggleActive.includes(key)) {
      setToggleItem(toggleActive.filter(items=> items !== key))
      return
    }
    if(key=='sub6-1' || key == 'sub6-1-1') {
      setToggleItem([...toggleActive, key])
      return
    }
    setToggleItem([key])
  }
  const MyDivider = ()=> <Divider className="my-0"/>

  const Logout = ()=> (
              <div className="logout d-flex justify-content-center align-items-center p-3 cursor-pointer">
                      {collapsed?(null):(<Icon icon={gearFill} />)}
                      <span className={collapsed?(null):("ml-3")}> {collapsed?(<Icon icon={gearFill} />):('Paramètre')}  </span>
                </div>
  )
  return  <>
            <Router>
                <div className="d-flex position-relative">
                  <div style={{width: !collapsed?'':70}} className="position-relative">
                    <div className="circle d-flex justify-content-between align-items-center" onClick={()=> setCollapsed(collapsed?false:true)}>
                        <LeftOutlined/>

                        <RightOutlined/>
                    </div>
                    <Menu
                        style={{width: 'auto'}}
                        mode="inline"
                        selectedKeys={[actives]}
                        openKeys={toggleActive}
                        inlineCollapsed={collapsed}
                      >
                      <Itemlogo/>
                      <Item  key="sub1" icon={<Icon style={{'fontSize': '23px'}} icon={baselineTune} />} title="Set up" onClick={()=>handleActive('sub1')}>
                          <Link to="/" > Set up </Link>
                      </Item>
                      <SubMenu className="dashboard" key="sub2" icon={<Icon icon={outlineDashboard} style={{'fontSize': '23px'}} />} title="Tableau de bord" onTitleClick={()=>handleToggleMenu('sub2')}>
                        <Item className="b-bottom-gutter text-center" key="0" onClick={()=>handleActive('0')}>
                            <Link to="/" > Relation client </Link>
                        </Item>
                        <Item className="b-bottom-gutter text-center" key="1" onClick={()=>handleActive('1')}>
                            <Link to="/" > Gestion projet </Link>
                        </Item>
                        <Item className="b-bottom-gutter text-center" key="2" onClick={()=>handleActive('2')}>
                            <Link to="/" > Stock et facturation </Link>
                        </Item>
                        <Item className="b-bottom-gutter text-center" key="3" onClick={()=>handleActive('3')}>
                            <Link to="/"> Coordination financière </Link>
                        </Item>
                      </SubMenu>
                      <SubMenu className="dashboard" key="sub3" icon={<Icon icon={baselineCalendarToday} style={{'fontSize': '23px'}} />} title="Calendrier" onTitleClick={()=>handleToggleMenu('sub3')}>
                        <Item className="b-bottom-gutter text-center" key="10"  onClick={()=>handleActive('10')}>
                            <Link to="/"> Aujourd'hui </Link>
                        </Item>
                        <Item className="b-bottom-gutter text-center" key="20" onClick={()=>handleActive('20')}>
                            <Link to="/" > Agenda </Link>
                        </Item>
                        <Item className="b-bottom-gutter text-center" key="30"  onClick={()=>handleActive('30')}>
                            <Link to="/"> Evénements </Link>
                        </Item>
                      </SubMenu>
                      <Item  onClick={()=>handleActive('sub4')} className="b-bottom-gutter" key="sub4" icon={<Icon icon={baselineBarChart} style={{'fontSize': '23px', 'transform': 'rotate(90deg)'}} />}>
                            <Link to="/"> Gantt </Link>
                      </Item>
                      <MyDivider/>
                      {/*Relation client */}
                        <SubMenu key="sub5" icon={<div className="p-1 bg-yellow d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={baselineGroups} /></div>} title="Relation client" onTitleClick={()=>handleToggleMenu('sub5')}>
                            <Item className="b-bottom-gutter " key="100" onClick={()=>handleActive('100')}>
                              <div className="d-flex align-items-center">
                                  <div className="p-1 bg-gray d-flex align-items-center border-7 bg-yellow-transit"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={baselineBarChart} /></div>
                                  <span className="ml-2"> Opportunités </span>
                              </div>
                            </Item>
                            <Item className="b-bottom-gutter " key="200" onClick={()=>handleActive('200')}>
                              <div className="d-flex align-items-center">
                                  <div className="p-1 bg-gray d-flex align-items-center border-7 bg-yellow-transit"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={baselinePersonOutline} /></div>
                                  <span className="ml-2"> Prospects </span>
                              </div>
                            </Item>
                            <Item className="b-bottom-gutter " key="300" onClick={()=>handleActive('300')}>
                              <div className="d-flex align-items-center">
                                  <div className="p-1 bg-gray d-flex align-items-center border-7 bg-yellow-transit"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={bxCube} /></div>
                                  <span className="ml-2"> Produits </span>
                              </div>
                            </Item>
                        </SubMenu>
                        {/* Gestion des projets */}
                        <MyDivider/>
                        <SubMenu key="sub6" icon={<div className="p-1 bg-green d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={stackIcon} /></div>} title="Gestion projet" onTitleClick={()=>handleToggleMenu('sub6')}>
                            <SubMenu className="b-bottom-gutter" key="sub6-1" onTitleClick={()=>handleToggleMenu('sub6-1')} icon={<div className="p-1 bg-green-transit d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={stackedScrolling1} /></div>} title="Projets">
                                <Item className="b-bottom-gutter b-top-gutter" key="sub6-0">
                                  <div className="d-flex align-items-center" onClick={()=>handleActive('sub6-0')}>
                                      <span className="ml-2"> Ajouter un projet </span>
                                  </div>
                                </Item>
                                <SubMenu className="b-bottom-gutter category" key="sub6-1-1" title="Catégorie de projet" onTitleClick={()=>handleToggleMenu('sub6-1-1')}>
                                      <Item className="b-bottom-gutter b-top-gutter" key="1k" onClick={()=>handleActive('1k')}>
                                        Créer une categorie
                                      </Item>
                                      <Item className="b-bottom-gutter" key="2k" onClick={()=>handleActive('2k')}>
                                        Administratif
                                      </Item>
                                      <Item className="b-bottom-gutter" key="3k" onClick={()=>handleActive('3k')}>
                                        Commercial
                                      </Item>
                                      <Item className="b-bottom-gutter" key="4k" onClick={()=>handleActive('4k')}>
                                        Juridique
                                      </Item>
                                      <Item className="b-bottom-gutter" key="5k" onClick={()=>handleActive('5k')}>
                                        Financier
                                      </Item>
                                      <Item className="b-bottom-gutter" key="6k" onClick={()=>handleActive('6k')}>
                                        Industriel
                                      </Item>
                                </SubMenu>
                                <Item className="b-bottom-gutter" key="1.2" onClick={()=>handleActive('1.2')}>
                                    Tous les projets
                                </Item>
                            </SubMenu>
                            <Item className="b-bottom-gutter" key="sub6.1" onClick={()=>handleActive('sub6.1')}>
                              <div className="d-flex align-items-center">
                                  <div className="p-1 bg-green-transit d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={outlineInsertDriveFile} /></div>
                                  <span className="ml-2"> Fichiers </span>
                              </div>
                            </Item>
                            <Item className="b-bottom-gutter" key="sub6.2" onClick={()=>handleActive('sub6.2')}>
                              <div className="d-flex align-items-center">
                                  <div className="p-1 bg-green-transit d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={timerSand} /></div>
                                  <span className="ml-2"> Congés </span>
                              </div>
                            </Item>
                            <Item className="b-bottom-gutter" key="sub6.3" onClick={()=>handleActive('sub6.3')}>
                              <div className="d-flex align-items-center">
                                  <div className="p-1 bg-green-transit d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={outlineTextSnippet} /></div>
                                  <span className="ml-2"> Annonces </span>
                              </div>
                            </Item>
                        </SubMenu>
                        <MyDivider/>
                        <SubMenu key="sub7" onClick={()=>handleToggleMenu('sub7')} icon={<div className="p-1 bg-orange d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={invoiceIcon} /></div>} title="Stock & facturation">

                        </SubMenu>
                        <MyDivider/>
                        <SubMenu key="sub8" onClick={()=>handleToggleMenu('sub8')} icon={<div className="p-1 bg-blue d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={currencyEuro} /></div>} title="Coordination finacière">

                        </SubMenu>
                        <MyDivider/>
                        <SubMenu className="mb-5" key="sub9" onClick={()=>handleToggleMenu('sub9')} icon={<div className="p-1 bg-violet d-flex align-items-center border-7"><Icon style={{'fontSize': '20px', color: '#fff'}} icon={userSettingsLine} /></div>} title="Ressources humaines">

                        </SubMenu>
                        <Logout/>
                      </Menu>
                  </div>
                      <div className="flex-grow-1">
                          <h1></h1>
                      </div>
                      <div className="right-bar d-flex flex-column justify-content-between py-3">
                        <div>
                          <div className="d-flex align-items-center justify-content-center">
                              <Avatar className="mb-4" size={44} src="https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                          </div>
                            <div className="item-bar-right position-relative d-flex align-items-center justify-content-center py-3">
                            <Icon style={{'fontSize': '20px', color: '#fff'}} icon={envelopeIcon} />
                              <Badge dot className="position-absolute m-badge">
                                <a href="#" className="head-example" />
                              </Badge>
                            </div>
                            <div className="item-bar-right position-relative d-flex align-items-center justify-content-center py-3">
                            <Icon style={{'fontSize': '20px', color: '#fff'}} icon={chatLeftDots} flip="horizontal"/>
                            </div>
                            <div className="item-bar-right position-relative d-flex align-items-center justify-content-center py-3">
                            <Icon style={{'fontSize': '24px', color: '#fff'}} icon={baselineLaunch} flip="vertical"/>
                            </div>
                            <div className="item-bar-right position-relative d-flex align-items-center justify-content-center py-3">
                            <Icon style={{'fontSize': '24px', color: '#fff'}} icon={cameraVideo}/>
                            </div>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <div className="item-bar-right position-relative d-flex align-items-center justify-content-center py-3">
                            <Icon style={{'fontSize': '24px', color: '#fff'}} icon={fileIcon}/>
                            </div>
                            <div className="item-bar-right position-relative d-flex align-items-center justify-content-center py-3">
                            <Icon style={{'fontSize': '27px', color: '#fff'}} icon={fieldTimeOutlined}/>
                            </div>
                            <div className="item-bar-right position-relative d-flex align-items-center justify-content-center py-3">
                              <Icon style={{'fontSize': '24px', color: '#fff'}} icon={calculatorIcon}/>
                            </div>
                          </div>
                          <div className="d-flex item-bar-right flex-column align-items-center justify-content-center">
                              <Icon style={{'fontSize': '24px', color: '#fff'}} icon={questionMarkCircleOutline}/>
                          </div>
                      </div>
                </div>
              </Router>
      </>
}
  


export default App
