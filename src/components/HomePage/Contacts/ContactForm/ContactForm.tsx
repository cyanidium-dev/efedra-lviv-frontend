export const ContactForm = () => {
  return (
    <div>
      <h3 className="sr-only">Форма зворотнього зв'язку</h3>
      <form>
        <input type="text" placeholder="Ім'я" />
        <input type="text" placeholder="Телефон" />
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};
