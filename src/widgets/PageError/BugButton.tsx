import { useEffect, useState } from 'react';
import { Button } from 'shared/components/Button';

export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
  // eslint-disable-next-line i18next/no-literal-string
    <Button style={{ margin: '20px' }} onClick={onThrow}>
      throw Error
    </Button>
  );
};
