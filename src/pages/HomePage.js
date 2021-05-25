const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#000',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Your personal phonebook <br /> welcomes you!
    </h1>
  </div>
);

export default HomePage;
