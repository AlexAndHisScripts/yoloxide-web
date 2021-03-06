import ErrorLog from '../../components/util/ErrorLog'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCode, safeGet } from '../../getters'

const mapStateToProps = (state, {deviceId}) => ({
  errors:safeGet(getCode(state, deviceId), 'errors')
})

const Connected = connect(
  mapStateToProps
)(ErrorLog)

Connected.propTypes = {
  ...Connected.propTypes,
  networkId:PropTypes.string.isRequired,
  deviceId:PropTypes.string.isRequired
}

export default Connected
