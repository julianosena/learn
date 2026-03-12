package com.julianosena.learn.dsa.model;

public class LinkedList<T> {

	private LinkedListNode<T> head;
	private LinkedListNode<T> tail;
	private int size = 0;

	public void add(T value) {
		if(null == head) this.head = new LinkedListNode<T>(value);
		this.head.next = new LinkedListNode<T>(value);
		this.head.next.previous = this.head;
		size++;
	}

	public void remove() {

		size--;
	}

	public int size(){
		return size;
	}

	private static class LinkedListNode<T> {
		private T value;
		private LinkedListNode<T> next;
		private LinkedListNode<T> previous;

		public LinkedListNode(T value){
			this.value = value;
		}

		public T getValue() {
			return value;
		}

		public void setValue(T value) {
			this.value = value;
		}

		public LinkedListNode<T> getNext() {
			return next;
		}

		public void setNext(LinkedListNode<T> next) {
			this.next = next;
		}
	}
}
