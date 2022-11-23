/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'survey-core/modern.min.css';
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import './questionaire.css';


StylesManager.applyTheme('defaultV2');


const QuestionaireComp = ({surveyJSON, sendDataToServer}) => {
  const navigate = useNavigate();

  const survey = new Model(surveyJSON);
  survey.onComplete.add(async (sender) => {
    sendDataToServer(sender);
    try {
      addDoc(collection(db, 'requests'), sender.data).then(() => {
      navigate('/submitted');
      });
      
    } catch (error) {
      console.log(error.message);
    }
  });

  return (
    <Survey model={survey} />
  );
};

QuestionaireComp.propTypes = {
  surveyJSON: PropTypes.object.isRequired,
  sendDataToServer: PropTypes.func.isRequired,
};

export default QuestionaireComp;
