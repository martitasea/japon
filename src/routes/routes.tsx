import React, {FC} from 'react';
import {HashRouter, Navigate, Outlet, Route, Routes, useParams} from 'react-router-dom';
import i18n from 'i18next';
import MapView from '../views/Map';
import NotFoundPage from '../components/NotFoundPage';

const LangSetter: FC = () => {
  const {lang} = useParams();
  const supportedLanguages = ['en', 'es'];

  if (!lang || !supportedLanguages.includes(lang)) {
    return <NotFoundPage />;
  }

  if (i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  }
  return <Outlet/>;
};

const AppRoutes: FC = () =>
  <HashRouter>
    <Routes>
      <Route path=":lang" element={<LangSetter/>}>
        <Route index element={<Navigate to="map"/>}/>
        <Route path="map" element={<MapView/>}/>
        {/*
         <Route path="detail" element={<Layout mainContent={<MapView/>} miniSidePanelSelectedActionId='detail'/>}/>
        */}
      </Route>
      <Route path="/" element={<Navigate to={`/${i18n.resolvedLanguage || 'es'}/`} replace/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </HashRouter>;

export default AppRoutes;
