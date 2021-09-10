package com.iagoramonmoller.cursojava.aula05;

public class Variaveis {

	public static void main(String[] args) {
		
		int i = 2;
		int j = 4;
		int k = 6;
		i += ++j - k--;
		k *= i++ + i * j;
		System.out.println(i + k + j);

	}

}