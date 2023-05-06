import styles from './InDevelopment.module.scss'
type Props = {}
const InDevelopment = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Сторінка знаходиться у розробці</h2>
      </div>
  )
}
export default InDevelopment