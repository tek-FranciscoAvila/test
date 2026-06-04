import { Box, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { useTenant } from "@/context/TenantContext";
export const HomeView = () => {
  const tenant = useTenant();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username, password);
  };
  return (
    <Box className={styles.formStyle}>
      <Title order={4}>{tenant.name}</Title>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <div className={styles.inputStyle}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.inputStyle}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.buttonStyle}>
          Login
        </button>
      </form>
    </Box>
  );
};
