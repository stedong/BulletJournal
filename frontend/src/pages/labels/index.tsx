import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { IState } from '../../store/index';
import { Label } from '../../features/label/interface';
import { labelsUpdate } from '../../features/label/actions';
import LabelsWithRedux from './create-label.pages';
import LabelsSearching from './search-label.component';
import './labels.styles.less';

type LabelsPageProps = {
  labels: Label[];
  labelOptions: Label[];
  defaultLabels: Label[];
  labelsUpdate: () => void;
};

const LablesPage: React.FC<LabelsPageProps> = props => {
  const { createOrSearch } = useParams();
  const history = useHistory();
  const [path, setPath] = useState('search');
  const startSearching = () => {
    setPath('search');
  };

  const endSearching = () => {
    setPath('create');
  };

  useEffect(() => {
    props.labelsUpdate();
  }, []);

  useEffect(() => {
    history.push(`/labels/${path}`);
  }, [path]);

  return (
    <div className="labels-page">
      {createOrSearch === 'search' ? (
        <LabelsSearching
          defaultLabels={props.defaultLabels}
          labelOptions={props.labelOptions}
          endSearching={endSearching}
        />
      ) : (
        <LabelsWithRedux
          labels={props.labels}
          startSearching={startSearching}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  labels: state.label.labels,
  defaultLabels: state.label.labelsSelected,
  labelOptions: state.label.labelOptions
});

export default connect(mapStateToProps, { labelsUpdate })(LablesPage);
