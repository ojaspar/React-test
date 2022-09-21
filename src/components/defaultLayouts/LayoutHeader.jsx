import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Header.css';
import searchIcon from '../../assets/images/search-icon.svg';
import notificationIcon from '../../assets/images/notification-icon.svg';
import avatarIcon from '../../assets/images/avatar.svg';
import { ReactComponent as DropDownIcon } from '../../assets/images/dropdown.svg';
function LayoutHeader({ gridArea }) {
	return (
		<nav className={`navbar-default ${gridArea}`}>
			<div className='search'>
				<input type='text' placeholder='Search anything....' />
				<img src={searchIcon} alt='search-icon' className='search-icon' />
			</div>
			<div className='notification'>
				<div className='badge-container'>
					<img src={notificationIcon} alt='notification' />
					<div className='badge'>2</div>
				</div>
				<div className='avatar-container'>
					<div className='avatar'>
						<img src={avatarIcon} alt='avatar-icon' />
					</div>
					<DropDownIcon className='dropdown' />
				</div>
			</div>
		</nav>
	);
}

LayoutHeader.defaultProps = {
	gridArea: 'header',
};
LayoutHeader.propTypes = {
	gridArea: PropTypes.string.isRequired,
};
export default LayoutHeader;
