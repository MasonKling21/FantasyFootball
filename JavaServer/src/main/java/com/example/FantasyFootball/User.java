package com.example.FantasyFootball;

public class User {
	private final String username;
	private final String email;
	private final String password;

	public User(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
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

	@Override
	public String toString() {
		return String.format(
			"User[username=%s, email='%s', password='%s']",
			username, email, password);
	}

}