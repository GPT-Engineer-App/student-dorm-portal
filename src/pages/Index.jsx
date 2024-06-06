import React, { useState, useEffect } from "react";
import { Container, VStack, Text, Button, Input, Box, HStack, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaSignOutAlt, FaUser, FaCog, FaList, FaHome, FaBed } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [students, setStudents] = useState([]);
  const [dorms, setDorms] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  const handleLogin = async () => {
    // Simulate login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch data from backend
      fetchStudents();
      fetchDorms();
      fetchRooms();
      fetchUsers();
    }
  }, [isLoggedIn]);

  const fetchStudents = async () => {
    // Simulate fetching students
    setStudents([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ]);
  };

  const fetchDorms = async () => {
    // Simulate fetching dorms
    setDorms([
      { id: 1, name: "Dorm A" },
      { id: 2, name: "Dorm B" },
    ]);
  };

  const fetchRooms = async () => {
    // Simulate fetching rooms
    setRooms([
      { id: 1, number: "101" },
      { id: 2, number: "102" },
    ]);
  };

  const fetchUsers = async () => {
    // Simulate fetching users
    setUsers([
      { id: 1, username: "admin" },
      { id: 2, username: "user1" },
    ]);
  };

  if (!isLoggedIn) {
    return (
      <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Dormitory Login</Text>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin}>Login</Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" p={4}>
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="2xl">Dormitory Management System</Text>
        <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={handleLogout} />
      </HStack>
      <HStack spacing={4} mb={4}>
        <Button leftIcon={<FaUser />}>Students</Button>
        <Button leftIcon={<FaHome />}>Dorms</Button>
        <Button leftIcon={<FaBed />}>Rooms</Button>
        <Button leftIcon={<FaList />}>Users</Button>
        <Button leftIcon={<FaCog />}>Settings</Button>
      </HStack>
      <Box>
        <Text fontSize="xl" mb={2}>
          Students
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student) => (
              <Tr key={student.id}>
                <Td>{student.id}</Td>
                <Td>{student.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box mt={4}>
        <Text fontSize="xl" mb={2}>
          Dorms
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dorms.map((dorm) => (
              <Tr key={dorm.id}>
                <Td>{dorm.id}</Td>
                <Td>{dorm.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box mt={4}>
        <Text fontSize="xl" mb={2}>
          Rooms
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rooms.map((room) => (
              <Tr key={room.id}>
                <Td>{room.id}</Td>
                <Td>{room.number}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box mt={4}>
        <Text fontSize="xl" mb={2}>
          Users
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Username</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.username}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default Index;
