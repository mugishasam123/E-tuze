/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'survey-core/modern.min.css';
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import './questionaire.css';


StylesManager.applyTheme('defaultV2');


const QuestionaireComp = ({surveyJSON, sendDataToServer}) => {
  const navigate = useNavigate();

  const survey = new Model(surveyJSON);
  survey.onComplete.add((sender) => {
    sendDataToServer(sender);
    navigate('/submitted');
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
