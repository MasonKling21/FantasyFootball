package com.example.FantasyFootball;

public class User {
	private final String username;
	private final String email;
	private final String password;
	private final String salt;

	public User(String username, String email, String password, String salt) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.salt = salt;
	}

	public String getUsername() {
		return this.username;
	}

	public String getEmail() {
		return this.email;
	}

	public String getPassword() {
		return this.password;
	}

	public String getSalt() {
		return this.salt;
	}

	@Override
	public String toString() {
		return String.format(
			"User[username=%s, email='%s', password='%s']",
			username, email, password);
	}

}