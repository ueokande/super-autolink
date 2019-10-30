import React from 'react';
import { connect } from 'react-redux';
import * as settingActions from '../../settings/actions/setting';
import { State as AppState } from '../reducers/setting';
import DeleteButton from './ui/DeleteButton';
import AddButton from './ui/AddButton';

type StateProps = ReturnType<typeof mapStateToProps>;
interface DispatchProps {
  dispatch: (action: any) => void,
}
type Props = StateProps & DispatchProps & {
  store: any,
};

class SettingsComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.dispatch(settingActions.load());
  }

  render() {
    return <div>
      <table>
      <thead>
        <tr><th>Prefix</th><th>URL</th><th></th></tr>
      </thead>
      <tbody>
        {
          this.props.entries.map((e, index) => <tr key={index}>
            <td><input data-index={index} onChange={this.bindPrefixValue.bind(this)} name='prefix' placeholder='TICKET-' value={ e.prefix } /></td>
            <td><input data-index={index} onChange={this.bindPlaceholderValue.bind(this)} name='placeholder' placeholder='https://example.com/TICKET?query={}' value={ e.placeholder } /></td>
            <td><DeleteButton onClick={this.deleteEntry.bind(this)} /></td>
          </tr>)
        }
      </tbody>
      </table>
      <AddButton onClick={this.addEntry.bind(this)}/>
    </div>
  }

  bindPrefixValue(e: React.ChangeEvent<HTMLInputElement>) {
    let target = e.currentTarget;
    let index = Number(target.getAttribute('data-index'));
    this.props.dispatch(settingActions.updatePrefix(index, target.value));
  }

  bindPlaceholderValue(e: React.ChangeEvent<HTMLInputElement>) {
    let target = e.currentTarget;
    let index = Number(target.getAttribute('data-index'));
    this.props.dispatch(settingActions.updatePlaceholder(index, target.value));
  }

  addEntry() {
    this.props.dispatch(settingActions.add());
  }

  deleteEntry(e: React.MouseEvent<HTMLInputElement>) {
    let target = e.currentTarget;
    let index = Number(target.getAttribute('data-index'));
    this.props.dispatch(settingActions.remove(index));
  }
}
const mapStateToProps = (state: AppState) => ({ ...state });

export default connect(mapStateToProps)(SettingsComponent);
