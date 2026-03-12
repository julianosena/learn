package com.julianosena.learn.dsa;

import com.julianosena.learn.dsa.model.LinkedList;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DisplayName("Linked list test")
class LinkedListTest {

	@Test
	@DisplayName("It should add node as expected with success")
	void itShouldAddNodeWithSuccess(){
		// Given
		var linkedList = new LinkedList<Integer>();

		// When
		linkedList.add(1);
		linkedList.add(2);
		linkedList.add(3);

		// Then
		assertEquals(3, linkedList.size());
	}

	@Test
	@DisplayName("It should remove node as expected with success")
	void itShouldPopNodeWithSuccess(){
		// Given
		var linkedList = new LinkedList<Integer>();

		// When
		linkedList.remove();

		// Then
		assertEquals(3, linkedList.size());
	}

}
