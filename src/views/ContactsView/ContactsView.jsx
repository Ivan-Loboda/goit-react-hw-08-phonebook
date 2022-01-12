import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import s from './ContactsView.module.css';

const ContactsView = () => {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
