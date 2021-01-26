import styles from './LoginComponent.module.css';
import Link from 'next/link';

const LoginComponent = () => {
	return (
		<section className={styles.loginComponentContainer}>
			<div className={styles.loginWrapper}>
				<div className={styles.loginTitle}>
					<h2>로그인</h2>
				</div>
				<form action="#">
					<div className={styles.inputContainer}>
						<input
							type="email"
							className={styles.inputID}
							name="id"
							required
							placeholder="아이디(이메일계정)"
						/>
						<input
							type="password"
							className={styles.inputPW}
							name="pw"
							required
							placeholder="비밀번호"
						/>
						<button className={styles.loginButton} type="submit">
							로그인
						</button>
						<label className={styles.rememberLabel}>
							<input type="checkbox" name="remember" />
							아이디 저장
						</label>
						<ul className={styles.list}>
							<li>
								<Link href="/">
									<a>아이디 찾기</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>비밀번호 찾기</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>회원가입</a>
								</Link>
							</li>
						</ul>
					</div>
				</form>
			</div>
		</section>
	);
};

export default LoginComponent;
