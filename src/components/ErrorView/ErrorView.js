import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import s from './ErrorView.module.css';

function ErrorView({ message }) {
  return (
    <AnimatePresence>
      <motion.div
        role="alert"
        className={s.wrapper}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <p text={message} className={s.text}>
          {message}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;
