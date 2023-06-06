import React from 'react';

class Button extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    }
    return true;
  }
  render() {
    const { change, locale, show, enable } = this.props;
    if (!enable) return null;

    return (
      <div>
        <button type='button' onClick={() => change(locale)}>
          {locale === 'bn-BD' ? 'English' : 'Bangla'}
        </button>
        {show && <p>Hello</p>}
      </div>
    );
  }
}

export default Button;
