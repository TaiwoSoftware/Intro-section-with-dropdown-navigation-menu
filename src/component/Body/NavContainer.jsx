import todo from '../images/icon-todo.svg';
import calender from '../images/icon-calendar.svg';
import reminder from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg'
import '../style.css'
/**
 * Renders a navigation container with a list of items.
 * Each item consists of an image and a label.
 *
 * @returns {JSX.Element} The rendered navigation container.
 */
function NavContainer() {
  return (
    <div className="navContainer">
      <ul>
        <li>
          <img src={todo} alt="todo" className='images' />
          Todo List
        </li>
        <li>
          <img src={calender} alt="calender" className='images' />
          Calendar
        </li>
        <li>
          <img src={reminder} alt="reminder" className='images' />
          Reminder
        </li>
        <li>
          <img src={planning} alt="planning" className='images'/>
          Planning
        </li>
      </ul>
    </div>
  );
}

export default NavContainer;