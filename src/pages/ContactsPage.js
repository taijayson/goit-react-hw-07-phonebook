import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

const ContactsPage = () => (
  <>
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactList />
      <Filter />
    </div>
  </>
);

export default ContactsPage;
