import { useForm, ValidationError } from '@formspree/react';
import styles from '@/styles/modalForm.module.css'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xxxxx');
  if (state.succeeded) {
    return <p className="message">Tack för ditt meddelande! Jag kommer att kontakta dig snart.</p>;
  }

  return (
    <div className={styles.webbForm}>
      <form onSubmit={handleSubmit} className={styles.enkelForm}>
        <div className={styles.kontaktSektion}>
          <label htmlFor="namn">Namn:</label>
          <input type="text" id="namn" name="namn" required />
          <ValidationError prefix="Namn" field="namn" errors={state.errors} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="telefon">Telefon:</label>
          <input type="tel" id="telefon" name="telefon" />
          <ValidationError prefix="Telefon" field="telefon" errors={state.errors} />
        </div>

        <div className={styles.paketSektion}>
          <h2>Välj Paket:</h2>
          {/* Checkbox gruppering för paketval */}
          <div>
            <label>
              <input type="checkbox" name="paket" value="paket1" />
              Happy Soul
            </label>
            <label>
              <input type="checkbox" name="paket" value="paket2" />
              Paket 2
            </label>
            <label>
              <input type="checkbox" name="paket" value="paket3" />
              Gratis konsultation
            </label>
            <label htmlFor="paket4">
              <input type="checkbox" name="paket" value="paket4" id="paket4" />
             Ja tack jag vill prenumerera på ditt nyhetsbrev
            </label>
          </div>
        </div>

        <div className={styles.övrigtSektion}>
          <h2>Övriga frågor eller kommentarer eller vilket seminarie du anmäler dig till:</h2>
          <textarea id="ovrigt" name="ovrigt" />
          <ValidationError prefix="Kommentar" field="ovrigt" errors={state.errors} />
        </div>

        <button className={styles.sendBtn} type="submit" disabled={state.submitting}>Skicka</button>
      </form>
    </div>
  );
};

export default ContactForm; // Direktexport av ContactForm för enklare import
